# Generated by Django 4.2.1 on 2023-05-30 18:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('peliculas', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='peliculas',
            old_name='Actores',
            new_name='actores',
        ),
        migrations.RenameField(
            model_name='peliculas',
            old_name='Genero',
            new_name='genero',
        ),
        migrations.RenameField(
            model_name='peliculas',
            old_name='Titulo',
            new_name='titulo',
        ),
    ]
