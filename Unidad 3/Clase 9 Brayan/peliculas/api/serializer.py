from rest_framework.serializers import ModelSerializer
from peliculas.models import Peliculas

class PeliculasSerializer(ModelSerializer):

    class Meta:
        model = Peliculas
        fields = ['id', 'titulo', 'genero', 'actores']