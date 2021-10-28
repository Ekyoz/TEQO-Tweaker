import re
import serial
import warnings
import serial.tools.list_ports
from ConnectionChecker import *



''' 
def slide1(rawdata : str):
    #rawdata = str(port().readline())
    if "sld1" in rawdata():
        numbers = re.findall(r'\b\d+\b', rawdata())
        return int(numbers[0])

def slide2():
    rawdata = str(port().readline())
    if "sld2" in rawdata:
        numbers = re.findall(r'\b\d+\b', rawdata)
        return int(numbers[0])

def slide3():
    rawdata = str(port().readline())
    if "sld3" in rawdata:
        numbers = re.findall(r'\b\d+\b', rawdata)
        return int(numbers[0])

def slide4():
    rawdata = str(port().readline())
    if "sld4" in rawdata:
        numbers = re.findall(r'\b\d+\b', rawdata)
        return int(numbers[0])

'''

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
            numbers = re.findall(r'\b\d+\b', rawdata)
            print(str("sld1 : ") + str(int(numbers[0])))

