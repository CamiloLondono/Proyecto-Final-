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
        self.cicloIn(self.tiempo)
    
    def cicloIn(self,tiempo):
        i = True
        while i != False:
            time.sleep(self.tiempo)
            hola = logging.debug('Ejecutando de manera infinita. \n')