function parseUplink(device, payload)
{
    var parsed = payload.asParsedObject();
    env.log(parsed);    

    // Store ACI1_mA
    if(parsed.ACI1_mA != null){
        var ai1 = device.endpoints.byAddress("1");

        if (ai1 != null)
            ai1.updateGenericSensorStatus(parsed.ACI1_mA);
    };
    
    if(parsed.ACI2_mA != null){
        var ai2 = device.endpoints.byAddress("2");

        if (ai2 != null)
            ai2.updateGenericSensorStatus(parsed.ACI2_mA);
    };
    
    if(parsed.AVI1_V != null){
        var av1 = device.endpoints.byAddress("3");

        if (av1 != null)
            av1.updateGenericSensorStatus(parsed.AVI1_V);
    };
    
    if(parsed.AVI2_V != null){
        var av2 = device.endpoints.byAddress("4");

        if (av2 != null)
            av2.updateGenericSensorStatus(parsed.AVI2_V);
    }
}

/*
        "ACI1_mA": 0,
        "ACI2_mA": 0,
        "AVI1_V": 0,
        "AVI2_V": 0,
        "DI1_status": "H",
        "DI2_status": "H",
        "DO1_status": "H",
        "DO2_status": "H",
        "Hardware_mode": "LT22222",
        "RO1_status": "OFF",
        "RO2_status": "OFF",
        "Work_mode": "2ACI+2AVI"
*/

function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}