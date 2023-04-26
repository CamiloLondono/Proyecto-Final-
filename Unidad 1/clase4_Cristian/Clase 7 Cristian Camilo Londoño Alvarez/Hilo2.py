import threading
import time
import logging

logging.basicConfig(level=logging.DEBUG)

class Hilo2(threading.Thread):
    def __init__(self, nombre_hilo, id_persona, data):
        threading.Thread.__init__(self, name=nombre_hilo, target=Hilo2.run)
        self.nombreHilo = nombre_hilo
        self.id_persona = id_persona
        self.data = data
    
    def run(self):
        self.guardar(self.id_persona, self.data)
    
    def guardar(self,id_persona, data):
        logging.debug('consultando para el id: ' + str(id_persona) + ', con data: ' + str(data))
        time.sleep(2)
        return