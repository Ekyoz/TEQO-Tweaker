import warnings
import serial
import serial.tools.list_ports

def port():
    arduino_ports = [
        p.device
        for p in serial.tools.list_ports.comports()
        if 'Arduino' in p.description
    ]
    print(arduino_ports)
    if not arduino_ports:
        raise IOError("No Arduino found")
    if len(arduino_ports) > 1:
        warnings.warn('Multiple Arduinos found - using the first')
    elif len(arduino_ports) == 1:
        arduino = serial.Serial(str(arduino_ports).replace("[", "").replace("'", "").replace("]", ""), 9600)
        return arduino


def slide():
    rawdata = str(port().readline())
    if rawdata[:rawdata.find(":")] == "sld1":
        pos2 = rawdata.find(':')
        clean = rawdata[:pos2]
        dataPot1=round(int(float(clean))/1023,2)
        return dataPot1

def slide1():
    rawdata = str(port().readline())
    pos1 = rawdata.find(",")
    pos2 = rawdata.find(";")
    cleanPass = rawdata[pos1:pos2]
    clean = cleanPass[1:]
    dataPot2=round(int(float(clean))/1023,2)
    return dataPot2

def slide2():
    rawdata = str(port().readline())
    pos1 = rawdata.find(";")
    pos2 = rawdata.find(":")
    cleanPass = rawdata[pos1:pos2]
    clean = cleanPass[1:]
    dataPot3=round(int(float(clean))/1023,2)
    return dataPot3

def slide3():
    rawdata = str(port().readline())
    pos1 = rawdata.find(";")
    pos2 = rawdata.find(":")
    cleanPass = rawdata[pos1:pos2]
    clean = cleanPass[1:]
    dataPot4=round(int(float(clean))/1023,2)
    return dataPot4

def isSlidesChanging():
    if slide() != ValActPot1:
        return "slider_1"

    if slide1() != ValActPot2:
        return "slider_2"

    if slide2() != ValActPot2:
        return "slider_3"

    if slide3() != ValActPot3:
        return "slider_4"

ValActPot1 = slide()
ValActPot2 = slide1()
ValActPot3 = slide2()
ValActPot4 = slide3()
