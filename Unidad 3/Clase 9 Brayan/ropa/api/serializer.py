from rest_framework.serializers import ModelSerializer
from ropa.models import Ropa

class RopaSerializer(ModelSerializer):

    class Meta:
        model = Ropa
        fields = ['id', 'diseño', 'color', 'talla']