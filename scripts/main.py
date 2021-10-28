import re
import warnings
from ConnectionChecker import arduino_port
from Actions import *
from changeVolume import *
import serial


if __name__ == "__main__":
    arduino_ports = arduino_port()

    if not arduino_ports:
        raise IOError("No Arduino found")
    if len(arduino_ports) > 1:
        warnings.warn('Multiple Arduinos found - using the first')
    elif len(arduino_ports) == 1:
        arduino = serial.Serial(str(arduino_ports).replace("[", "").replace("'", "").replace("]", ""), 9600)
        while True:
            rawdata = str(arduino.readline())
            if "sld1" in rawdata:
                val = re.findall(r'\b\d+\b', rawdata)
                volume_master(int(val[0]))
            if "sld2" in rawdata:
                val = re.findall(r'\b\d+\b', rawdata)
                volume_app(int(val[0]), str("opera.exe"))
            if "sld3" in rawdata:
                val = re.findall(r'\b\d+\b', rawdata)
                volume_app(int(val[0]), str("Spotify.exe"))
            if "sld4" in rawdata:
                val = re.findall(r'\b\d+\b', rawdata)
                volume_app(int(val[0]), str("Discord.exe"))



'''
            if action("pot4") == "None" or "master" or "process":
                if action("pot4") == "master":
                    changeMasterVolume(pot4())
                if action("pot4") == "process":
                    changeProcessVolume(pot4(), "pot4")
            elif action("pot4") != "None" or "master" or "process":
                print("Error in settings.json!")
'''
