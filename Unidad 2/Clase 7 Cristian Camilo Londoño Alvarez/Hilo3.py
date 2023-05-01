import threading
import time
import logging

logging.basicConfig(level=logging.DEBUG)

class Hilo3(threading.Thread):
    def __init__(self, nombre_hilo, tiempo, variable):
        threading.Thread.__init__(self, name=nombre_hilo, target=Hilo3.run)
        self.nombreHilo = nombre_hilo
        self.tiempo = tiempo
        self.variable = variable

    def setVariable(self, variable):
        self.variable = variable

    def run(self):
        self.cicloInfinito()
    
    def cicloInfinito(self):
        variableVerificar = ''
        while True:    
            if self.variable == variableVerificar:
                pass
            else:
                variableVerificar = self.variable
                f = open('Miserializacion.txt', 'w')
                f.write(variableVerificar)
                f.close()
                logging.debug('Se guardo la variable ' + variableVerificar +'\n')
            time.sleep(2)