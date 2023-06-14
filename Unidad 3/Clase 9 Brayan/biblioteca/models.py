from django.db import models

# Create your models here.
class Biblioteca(models.Model):
    Titulo = models.CharField(max_length=255)
    resumen = models.TextField()