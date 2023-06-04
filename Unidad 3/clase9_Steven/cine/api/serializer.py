from rest_framework.serializers import ModelSerializer
from cine.models import Cine

class CineSerializer(ModelSerializer):
    
    class Meta:
        model = Cine
<<<<<<< HEAD
        fields =['id','titulo','resumen']
=======
        fields =['id','sala','fila','asiento']
>>>>>>> ce252b4fb9804a5f92df3c0225016012d2c6d670
