# Generated by Django 5.0 on 2023-12-06 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_agendamento_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='agendamento',
            name='cpf',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
