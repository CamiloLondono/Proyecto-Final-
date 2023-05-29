from django.db import models

# Create your models here.
class Peliculas(models.Model):
    Titulo = models.CharField(max_length=255)
    Genero = models.CharField(max_length=255)
    Actores = models.CharField(max_length=255)