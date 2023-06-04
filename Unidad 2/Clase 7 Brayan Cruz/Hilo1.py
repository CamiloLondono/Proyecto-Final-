import threading
import time
import logging

logging.basicConfig(level=logging.DEBUG)

class Hilo1(threading.Thread):
    def __init__(self, nombre_hilo, id_persona):
        threading.Thread.__init__(self, name=nombre_hilo, target=Hilo1.run)
        self.nombreHilo = nombre_hilo
        self.id_persona = id_persona
    
    def run(self):
        self.consultar(self.id_persona)
    
    def consultar(self,id_persona):
        logging.debug('consultando: ' + str(id_persona))
        time.sleep(5)
        return