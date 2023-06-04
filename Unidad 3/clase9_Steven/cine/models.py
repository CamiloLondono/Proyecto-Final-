from django.db import models

# Create your models here.
class Cine(models.Model):
    titulo = models.CharField(max_length=255)
    resumen = models.TextField()