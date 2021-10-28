import serial
import serial.tools.list_ports

def arduino_port():
    arduino_ports = [
        p.device
        for p in serial.tools.list_ports.comports()
        if 'Arduino' in p.description
    ]
    return arduino_ports

def checker():
    if not arduino_port():
        print("No arduino found")
    if len(arduino_port()) > 1:
        print('Multiple Arduinos found - using the first')
    elif len(arduino_port()) == 1:
        print("True")

checker()