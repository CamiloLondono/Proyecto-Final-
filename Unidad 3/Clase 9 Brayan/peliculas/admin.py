from django.contrib import admin
from peliculas.models import Peliculas

# Register your models here.
@admin.register(Peliculas)
class PeliculasAdmin(admin.ModelAdmin):
    list_display = ['titulo', 'genero', 'actores']