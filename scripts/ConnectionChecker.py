import warnings
import serial
import serial.tools.list_ports

arduino_ports = [
    p.device
    for p in serial.tools.list_ports.comports()
    if 'Arduino' in p.description
]


if not arduino_ports:
    print("No arduino found")
if len(arduino_ports) > 1:
    print('Multiple Arduinos found - using the first')
elif len(arduino_ports) == 1:
    print("Arduino connected")