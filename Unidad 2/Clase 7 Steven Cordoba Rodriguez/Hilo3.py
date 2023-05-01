import threading
import time
import logging


class Hilo3(threading.Thread):

  def __init__(self, nombre_hilo, texto1, texto2):
    threading.Thread.__init__(self, name=nombre_hilo, target=Hilo3.run)
    self.nombreHilo = nombre_hilo
    self.texto1=texto1
    self.texto2=texto2

  def run(self):
    self.ciclo()

  def ciclo(self):
    while True:
      if self.texto1 != self.texto2:
        print("el string ha cambiado")
        self.texto1 = self.texto2
        x=open("guardadostr.txt", "w")
        x.write(self.texto1)
        x.close()
        # Agregar guardado
      time.sleep(2)

  def set_texto1(self, texto1):
    self.texto1=texto1
  def set_texto2(self, texto2):
    self.texto2=texto2