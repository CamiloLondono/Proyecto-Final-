from django.db import models

# Create your models here.
class Cine(models.Model):
<<<<<<< HEAD
    titulo = models.CharField(max_length=255)
    resumen = models.TextField()
=======
    sala = models.CharField(max_length=255)
    fila = models.TextField()
    asiento = models.TextField()
>>>>>>> ce252b4fb9804a5f92df3c0225016012d2c6d670
