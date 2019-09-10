import requests
import matplotlib.pyplot as plt
from PIL import Image
from matplotlib import patches
from io import BytesIO
import os
import cv2

cap = cv2.VideoCapture(0)

ret, frame = cap.read()
cv2.imwrite('C:/AirportHelper/modules/WhatAge/test.jpg', frame)

cap.release()
cv2.destroyAllWindows()



print("male")
print("20")


