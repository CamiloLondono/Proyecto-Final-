from rest_framework.serializers import ModelSerializer
from usuarios.models import Usuarios

class UsuariosSerializer(ModelSerializer):

    class Meta:
        model = Usuarios
        fields = ['nombre', 'apellido', 'usuarios', 'contrasena']