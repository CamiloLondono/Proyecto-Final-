from django.db import models

# Create your models here.
class Biblioteca(models.Model):
    titulo =  models.CharField(max_length=255)
    resumen = models.TextField()
    autor = models.CharField(max_length=255, default="")