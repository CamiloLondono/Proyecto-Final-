from django.db import models

# Create your models here.
class Cine(models.Model):
    sala = models.CharField(max_length=255)
    fila = models.TextField()
    asiento = models.TextField()