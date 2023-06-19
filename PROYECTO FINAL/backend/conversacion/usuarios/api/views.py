from rest_framework.viewsets import ModelViewSet
from usuarios.api.serializer import UsuariosSerializer
from usuarios.models import Usuarios


class UsuariosApiSet(ModelViewSet):
    serializer_class = UsuariosSerializer
    queryset = Usuarios.objects.all()