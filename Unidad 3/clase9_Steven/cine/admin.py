from django.contrib import admin
from cine.models import Cine


@admin.register(Cine)
class CineAdmin(admin.ModelAdmin):
    
    list_display = ['id', 'sala', 'fila', 'asiento']
