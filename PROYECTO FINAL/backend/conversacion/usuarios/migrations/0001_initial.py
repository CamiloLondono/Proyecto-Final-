# Generated by Django 4.2.1 on 2023-06-07 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('apellido', models.CharField(max_length=255)),
                ('usuarios', models.CharField(max_length=255)),
                ('contrasena', models.CharField(max_length=255)),
            ],
        ),
    ]