from django.contrib import admin
from usuarios.models import Usuarios

# Register your models here.
@admin.register(Usuarios)
class UsuariosAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'apellido', 'usuarios', 'contrasena']