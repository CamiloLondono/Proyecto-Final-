from rest_framework.serializers import ModelSerializer
from Peliculas.models import Peliculas

class PeliculasSerializer(ModelSerializer):

    class Meta:
        model = Peliculas()
        fields = ['id', 'Titulo', 'Genero', 'Actores']