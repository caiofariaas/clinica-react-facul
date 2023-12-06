from django.db import models

class Agendamento(models.Model):
    paciente = models.CharField(max_length=50)
    cpf = models.CharField(max_length=50)
    data = models.CharField(max_length=50)
    hora = models.CharField(max_length=50)
    motivo = models.CharField(max_length=300)

