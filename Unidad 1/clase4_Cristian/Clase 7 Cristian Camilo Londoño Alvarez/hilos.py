import threading
import datetime
import time
from Hilo1 import Hilo1
from Hilo2 import Hilo2
from Hilo3 import Hilo3

tiempo_inicial = datetime.datetime.now()

'''t1 = threading.Thread(name='hilo_1', target=consultar, args=(1,))
t2 = threading.Thread(name='hilo_2', target=guardar, args=(1,'Pruebra'))
t1.start()
t1.join()
t2.start()
t2.join()'''

t1 = Hilo1('hilo_1', 1)
t2 = Hilo2('hilo_2', 2, 'esta es la data')
t3 = Hilo3('hilo_3',2)

t1.start()
t1.join()
t2.start()
t2.join()
t3.start()


tiempo_final = datetime.datetime.now()
print('Tiempo transcurrido '+ str(tiempo_final.second - tiempo_inicial.second))
