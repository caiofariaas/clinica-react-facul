from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets

from .models import *


class AgendamentoAPIView(viewsets.ModelViewSet):
    queryset = Agendamento.objects.all()
    serializer_class = AgendamentoSerializer