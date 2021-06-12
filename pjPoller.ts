import puppeteer from "puppeteer";
import { ioCommands, pjWorld, RigStatus } from "./constants";
import PromisePool, { } from '@supercharge/promise-pool'
import PJ from "./pj";
import pj from "./pj";
import  {Server}  from "socket.io";



export default class pjPoller {
  browser: puppeteer.Browser
  pjs: Record<number, pj>
  rigStatus : RigStatus
  io?: Server
  constructor() {
    this.pjs = {}
    this.rigStatus = {
      online: false,
      power: false,
      shutter: false,
      blend: false,
      blendMarker: false,
      testPattren: false
    }
    
  }
  async start(){
    pjWorld().forEach(pjID=>{
      this.pjs[pjID] = new PJ(pjID)
    })
    await this.buildAllPJS()
  }
 async buildAllPJS(){
  return new Promise(res=>{
    let i = Object.values(this.pjs).length
    Object.values(this.pjs).forEach(async pj => {
      await pj.pollStatus()
      i--
      if(i===0){
        this.updateStatus()
        this.io?.emit(ioCommands.REQUEST_UPDATE)
        res('Complete')
      }
   })
  
  })
 }
  set Io(IO: Server){
    this.io = IO
  }
  
  getPJs(){
    return this.pjs
  }
  async pollAllPJs() {
    const { results, errors } = await PromisePool
      .for(Object.values(this.pjs))
      .process(async pj => {
        await pj.pollStatus()
      })
      this.updateStatus()
     this.io?.emit(ioCommands.REQUEST_UPDATE)
    //console.log(pjs)
  }
  async pollPJ(pjID: number){
   await  this.pjs[pjID]?.pollStatus()
   console.log('Polled',pjID)
   return this.getPJ(pjID)
  }
  getPJ(pjID: number) {
    return this.pjs[pjID]
  }
  getStatus():RigStatus{
    return this.rigStatus
  }
  updateStatus(){
    let s = {
      online: true,
      power: true,
      shutter: true,
      blend: true,
      blendMarker: true,
      testPattren: true
    }
    Object.values(this.pjs).forEach(pj=>{
      
      if(pj.online !=='true'){
        s.online = false
      }
      if(pj.power !=='On'){
        s.power = false
      }
      if(pj.shutter !=='Open'){
        s.shutter = false
      }
      if(pj.edgeBlending !=='On'){
        s.blend = false
      }
      if(pj.edgeBlendingMarker !=='Off'){
        s.blendMarker=false
      }
      if(pj.testPattren !=='Off'){
        s.testPattren = false
      }
    })
    this.rigStatus = s
  }
}


