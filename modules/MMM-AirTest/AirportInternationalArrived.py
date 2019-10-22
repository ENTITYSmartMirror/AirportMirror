from urllib.request import urlopen
from xml.etree.ElementTree import parse
from datetime import datetime

now = datetime.now()

url = 'http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList?serviceKey=wHP%2BDtLICbhZ5HS1kuRTV4zXVjyuNgmSelChKsogFgLcXenf4DdlUd5lJmR9vnl4ddrBrtFu%2FaFoxhBxJr23Vg%3D%3D&schLineType=I&schIOType=I&schAirCode=GMP&schStTime='

b ='&schEdTime=2400'
d = '&numOfRows=100'


hour = now.hour
minute = now.minute


hour = "06"
minute = "00"
x = url + hour + minute + b + d
'''

if hour < 10 :
    c = "0" +  str(hour)
    x = url + c + str(minute) + b + d


if hour > 9 :
    x = url + str(hour)  + str(minute) + b + d
'''

var_url = urlopen(x)

xmldoc = parse(var_url)

for item in xmldoc.iterfind('body/items/item'):
    airFln = item.findtext('airFln')
    airlineEnglish = item.findtext('airlineEnglish')
    boardingKor = item.findtext('boardingEng')
    std = item.findtext('std')
    gate = item.findtext('gate')
    if gate == None :
        gate = "Delay"
    std1 = int(std)
    std2 = std1%100
    std3 = std1/100
    std4 = int(std3)
    if std2 < 10 :
        std2 = "0" + str(std2)

    print(airFln+';'+airlineEnglish+';'+boardingKor+';'+"{}".format(std4)+":{}".format(std2)+';'+str(gate))
