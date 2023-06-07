from django.db import models

# Create your models here.
class Cine(models.Model):
    sala = models.CharField(max_length=255)
    fila = models.TextField(max_length=255)
    asiento = models.TextField(max_length=255)
