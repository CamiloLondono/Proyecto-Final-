from django.contrib import admin
from cine.models import Cine
<<<<<<< HEAD
# Register your models here.
=======

>>>>>>> ce252b4fb9804a5f92df3c0225016012d2c6d670

@admin.register(Cine)
class CineAdmin(admin.ModelAdmin):
    
<<<<<<< HEAD
    list_display = ['id', 'titulo']
=======
    list_display = ['id', 'sala', 'fila', 'asiento']
>>>>>>> ce252b4fb9804a5f92df3c0225016012d2c6d670
