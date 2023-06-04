from django.contrib import admin
from cine.models import Cine
# Register your models here.

@admin.register(Cine)
class CineAdmin(admin.ModelAdmin):
    
    list_display = ['id', 'titulo']
