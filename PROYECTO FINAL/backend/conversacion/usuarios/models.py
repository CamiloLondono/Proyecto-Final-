from django.db import models

# Create your models here.
class Usuarios(models.Model):
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    usuarios = models.CharField(max_length=255)
    contrasena = models.CharField(max_length=255)