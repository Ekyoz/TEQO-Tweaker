import json
import warnings

access = "settings.json"

def getProfils(name):
    with open(access, "r") as f:
        file = json.load(f)
    try:
        profiles = list(file["profiles"][name].keys())
        return "ok"
    except:
        return "no"

def getActive():
    with open(access, "r") as f:
        file = json.load(f)
    profiles = len(list(file["profiles"].keys()))
    while 
    return profiles

print(getActive())

def getAction(profiles, component, id):
    with open(access, "r") as f:
        file = json.load(f)
    if getProfils(profiles) == "ok":
        if component == "buttons":
            btnJson = file["profiles"][profiles][component][str("btn_" + id)]
            return btnJson
        if component == "potentiometres":
            ptnJson = file["profiles"][profiles][component][str("ptn_" + id)]
            return ptnJson
        if component == "sliders":
            sldJson = file["profiles"][profiles][component][str("sld_" + id)]
            return sldJson
        else:
            return "erreur"
    elif getProfils(profiles) == "no":
        return "profiles not exist"
    else:
        return "erreur"