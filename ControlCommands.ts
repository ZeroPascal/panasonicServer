import {ControlCommands,ControlKeys} from './constants'

interface responce{
    callbacks: Record<string, string |boolean>
}
interface control {
    name: string,
    command: string
}
export interface hexFunction{
    name: string
    control: Record<string,control>,
    query: string,
    response: Record<string,string> 
}

const getControl=(name:string, command: string):control=>{
    return {name, command}
}   
export const functions: Record<string,hexFunction>={
    Power: {
        name: 'Power',
        control: {[ControlCommands.POWER_ON]: getControl('Power On', '00PON\r'), [ControlCommands.POWER_OFF]:getControl('Power Off', '00POF\r')},
        query: '00QPW\r',
        response:{
            '00001\r' : 'On',
            '00000\r' : 'Off'
        }
    },
    Shutter:{
        name: 'Shutter',
        control: {[ControlCommands.SHUTTER_OPEN]: getControl('Shutter Open','00OSH:0\r'), [ControlCommands.SHUTTER_CLOSED]:getControl('Shutter Closed','00OSH:1\r')},
        query: '00QSH\r',
        response:{
             '000\r' : 'Open',
              '001\r' : 'Closed'
        }
    },
    Edge_Blending:{
        name: 'Edge Blending',
        control: {[ControlCommands.EDGE_BLENDING_OFF]:getControl('Off','00VXX:EDBI0=+00000\r'),[ControlCommands.EDGE_BLENDING_ON]:getControl('On','VXX:EDBI0=+00001\r'),'User':getControl('User','VXX:EDBI0=+00002\r')},
        query: '00QVX:EDBI0\r',
        response:{
            '00EDBI0=+00000\r' : 'Off',
            '00EDBI0=+00001\r' : 'On',
            '00EDBI0=+00002\r' : 'User'
        }
    },
    Edge_Blending_Markers:{
        name: 'Edge Blending Markers',
        control: {[ControlCommands.EDGE_BLENDING_MARKERS_ON]:getControl('Marker On', '00VGM:1\r'),[ControlCommands.EDGE_BLENDING_MARKERS_OFF]:getControl('Marker Off','00VGM:0\r')},
        query: '00QGM\r',
        response:{
            '000\r': 'Off',
            '001\r' : 'On'
        }
    },
    Lamp_Control_Status:{
        name: 'Lamp Control Status',
        control: {},
        query: '00Q$S\r',
        response:{
            '000\r': 'Lamp Off',
            '001\r': 'In Turning On',
            '002\r': 'Lamp On',
            '003\r': 'Lamp Cooling'
        }
    },
    Test_Pattern:{
        name: 'Test Pattern',
        control: {
           [ControlCommands.TEST_PATTERN_OFF]:getControl('Off', '00OTS:00\r'),
           [ControlCommands.TEST_PATTERN_WHITE]:getControl('White',  '00OTS:01\r'),
           [ControlCommands.TEST_PATTERN_BLACK]:getControl('Black','00OTS:02\r'),
           [ControlCommands.TEST_PATTERN_FOCUS_RED]:getControl('Focus Red','00OTS:70\r')
        },
        query: '00QTS\r',
        response: {
            '0000\r': 'Off',
            '0001\r': 'White',
            '0002\r': 'Black',

        }
    },
    Menu:{
        name: 'Menu',
        control: {
            [ControlCommands.MENU]:getControl('Menu','00OMN\r'),
            [ControlCommands.MENU_ENTER_KEY] : getControl('Enter', '00OEN\r'),
            [ControlCommands.MENU_UP_KEY] : getControl('Up','00OCU\r'),
            [ControlCommands.MENU_RIGHT_KEY]: getControl('Right','00OCR\r'),
            [ControlCommands.MENU_DOWN_KEY]: getControl('Down', '00OCD\r'),
            [ControlCommands.MENU_LEFT_KEY]: getControl('Left','00OCL\r'),
            [ControlCommands.MENU_DEFAULT_KEY]: getControl('Default','00OST\r')
            
        },
        query: '',
        response: {'None': ''}

    },
    OSD:{
        name: 'OSD',
        control:{
            [ControlCommands.OSD_POSITION_UPPER_LEFT]:getControl('Upper Left','00ODP:1\r'),
            [ControlCommands.OSD_POSITION_CENTER_LEFT]:getControl('Center Left','00ODP:2\r'),
            [ControlCommands.OSD_POSITION_LOWER_LEFT]:getControl('Lower Left','00ODP:3\r'),
            [ControlCommands.OSD_POSITION_TOP_CENTER]:getControl('Top Center','00ODP:4\r'),
            [ControlCommands.OSD_POSITION_CENTER]:getControl('Center','00ODP:5\r'),
            [ControlCommands.OSD_POSITION_LOWER_CENTER]:getControl('Lower Center','00ODP:6\r'),
            [ControlCommands.OSD_POSITION_UPPER_RIGHT]:getControl('Upper Right','00ODP:7\r'),
            [ControlCommands.OSD_POSITION_CENTER_RIGHT]:getControl('Center Right','00ODP:8\r'),
            [ControlCommands.OSD_POSITION_LOWER_RIGHT]:getControl('Lower Right','00ODP:9\r'),

        },
        query: '00QDP\r',
        response: {
            '001\r' :'Upper Left',
            '002\r' : 'Center Left',
            '003\r' : 'Lower Left',
            '004\r' : 'Top Center',
            '005\r' : 'Center',
            '006\r' : 'Lower Center',
            '007\r' : 'Upper Right',
            '008\r' : 'Center Right',
            '009\r' : 'Lower Right'
        }

    },
   
    Edge_Blending_Upper:{
        name: 'Edge Blending Upper',
        control: {
            [ControlCommands.EDGE_BLENDING_UPPER_ON]:getControl('On','00VGU:1\r'),
            [ControlCommands.EDGE_BLENDING_UPPER_OFF]:getControl('Off','00VGU:0\r')

        },
        query: '00QGU\r',
        response: {'001\r': 'On', '000\r': 'Off'}
    },
    Edge_Blending_Lower:{
        name: 'Edge Blending Lower',
        control: {
            [ControlCommands.EDGE_BLENDING_LOWER_ON]:getControl('On','00VGB:1\r'),
            [ControlCommands.EDGE_BLENDING_LOWER_OFF]:getControl('Off','00VGB:0\r')

        },
        query: '00QGB\r',
        response: {'001\r': 'On', '000\r': 'Off'}
    },
    Edge_Blending_Right:{
        name: 'Edge Blending Right',
        control: {
            [ControlCommands.EDGE_BLENDING_RIGHT_ON]:getControl('On','00VGR:1\r'),
            [ControlCommands.EDGE_BLENDING_RIGHT_OFF]:getControl('Off','00VGR:0\r')

        },
        query: '00QGR\r',
        response: {'001\r': 'On', '000\r': 'Off'}
    },
    Edge_Blending_Left:{
        name: 'Edge Blending Left',
        control: {
            [ControlCommands.EDGE_BLENDING_LEFT_ON]:getControl('On','00VGL:1\r'),
            [ControlCommands.EDGE_BLENDING_LEFT_OFF]:getControl('Off','00VGL:0\r')

        },
        query: '00QGL\r',
        response: {'001\r': 'On', '000\r': 'Off'}
    },
    Input_Signal_Name_Main:{
        name: 'Input Signal Name - Main',
        control: {},
        query: '00QVX:NSGS1\r',
        response: {}
    },
    HDMI_In_Signal_Level:{
        name: 'HDMI In-Signal Level',
        control :{},
        query: '00QVX:HSLI0\r',
        response: {
            '00HSLI0=+00000\r': '0-1023',
            '00HSLI0=+00001\r' :'64-940',
            '00HSLI0=+00002\r' :'Auto'
        }
    },
    HDMI_In_EDID_Resolution:{
        name: 'HDMI In-EDID Resolution',
        control: {},
        query: '00QVX:EDRS3\r',
        response: {
            '00EDRS3=1024:0768:p\r': '1024x768p',
            '00EDRS3=1280:0720:p\r' : '1280x720p',
            '00EDRS3=1280:0768:p\r' : '1280x768p',
            '00EDRS3=1280:0800:p\r' : '1280x800p',
            '00EDRS3=1280:1024:p\r' : '1280x1024p',
            '00EDRS3=1366:0768:p\r' : '1366x768p',
            '00EDRS3=1400:1050:p\r' : '1400x1050p',
            '00EDRS3=1440:0900:p\r' : '1440x900p',
            '00EDRS3=1600:0900:p\r' : '1600x900p',
            '00EDRS3=1600:1200:p\r' : '1600x1200p',
            '00EDRS3=1680:1050:p\r' : '1680x1050p',
            '00EDRS3=1920:1080:p\r' : '1920x1080p',
            '00EDRS3=1920:1080:i\r' : '1920x1080i',
            '00EDRS3=1920:1200:p\r' : '1920x1200p'
        }
    },
    Projector_Name:{
        name: 'Projector Name',
        control: {[ControlCommands.PROJECTOR_NAME]:getControl('Name','00VXX:NCGS8')}, //Drops Return and Equal, Handled In Setter
        query: '00QVX:NCGS8\r',
        response: {}
    }


}