# Generated by Django 5.0 on 2023-12-06 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='agendamento',
            name='hora',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='agendamento',
            name='data',
            field=models.DateField(),
        ),
    ]