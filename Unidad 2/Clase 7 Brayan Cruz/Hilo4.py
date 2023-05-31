import threading
import time
import logging

logging.basicConfig(level=logging.DEBUG)

class Hilo4(threading.Thread):
    def __init__(self, nombre_hilo, tiempo):
        threading.Thread.__init__(self, name=nombre_hilo, target=Hilo4.run)
        self.nombreHilo = nombre_hilo
        self.tiempo = tiempo

    def run(self):
        self.cicloIn(self.tiempo)
    
    def cicloIn(self,tiempo):
        i = True
        variable = ''
        variableVerificar = ''
        while i != False:
            variable = input('Por favor ingrese la variable: ')
            if variable == variableVerificar:
                logging.debug('La variable es similar.\n')
            else:
                variableVerificar = variable
                f = open('Mi serializacion.txt','a')
                f.write(variableVerificar + '\n')
                f.close()
                logging.debug('Se guardo ' + variableVerificar +'\n')
            time.sleep(self.tiempo)