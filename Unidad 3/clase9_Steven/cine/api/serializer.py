from rest_framework.serializers import ModelSerializer
from cine.models import Cine

class CineSerializer(ModelSerializer):

    class Meta:
        model = Cine
        fields = ['id', 'sala', 'fila', 'asiento']