import threading
import time
import logging

logging.basicConfig(level=logging.DEBUG)

class Hilo3(threading.Thread):
    def __init__(self, nombre_hilo, tiempo):
        threading.Thread.__init__(self, name=nombre_hilo, target=Hilo3.run)
        self.nombreHilo = nombre_hilo
        self.tiempo = tiempo

    def run(self):
        self.cicloInfinito(self.tiempo)
    
    def cicloInfinito(self,tiempo):
        i = True
        while i != False:
            time.sleep(self.tiempo)
            perro = logging.debug('Me estoy ejecutando de manera infinita. \n')
