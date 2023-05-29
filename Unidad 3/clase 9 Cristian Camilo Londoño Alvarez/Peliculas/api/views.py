from rest_framework.viewsets import ModelViewSet
from Peliculas.api.serializer import PeliculasSerializer
from Peliculas.models import Peliculas


class PeliculasApiSet(ModelViewSet):
    serializer_class = PeliculasSerializer
    queryset = Peliculas.objects.all()