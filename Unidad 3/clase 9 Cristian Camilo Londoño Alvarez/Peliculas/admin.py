from django.contrib import admin
from Peliculas.models import Peliculas

# Register your models here.
@admin.register(Peliculas)
class PeliculasAdmin(admin.ModelAdmin):
    list_display = ['Titulo', 'Genero', 'Actores']