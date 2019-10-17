from urllib.request import urlopen
from xml.etree.ElementTree import parse
from datetime import datetime

now = datetime.now()

url = 'http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList?serviceKey=wHP%2BDtLICbhZ5HS1kuRTV4zXVjyuNgmSelChKsogFgLcXenf4DdlUd5lJmR9vnl4ddrBrtFu%2FaFoxhBxJr23Vg%3D%3D&schLineType=I&schIOType=I&schAirCode=GMP&schStTime='

b ='&schEdTime=2400'
hour = now.hour
minute = now.minute

if hour < 10 :
    c = "0" +  str(hour)
    x = url + c + str(minute) + b

if hour > 9 :
    x = url + str(hour)  + str(minute) + b


var_url = urlopen(x)
xmldoc = parse(var_url)

for item in xmldoc.iterfind('body/items/item'):
    airFln = item.findtext('airFln')
    airlineEnglish = item.findtext('airlineEnglish')
    arrivedEng = item.findtext('arrivedEng')
    std = item.findtext('std')
    std1 = int(std)
    std2 = std1%100
    std3 = std1/100
    std4 = int(std3)
    print(airFln+';'+airlineEnglish+';'+arrivedEng+';'+"{}".format(std4)+": {}".format(std2))


