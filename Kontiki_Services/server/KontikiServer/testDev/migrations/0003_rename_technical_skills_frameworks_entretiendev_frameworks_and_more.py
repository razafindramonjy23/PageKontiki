# Generated by Django 5.1.4 on 2025-01-06 03:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testDev', '0002_remove_entretiendev_created_at_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entretiendev',
            old_name='technical_skills_frameworks',
            new_name='frameworks',
        ),
        migrations.RenameField(
            model_name='entretiendev',
            old_name='technical_skills_languages',
            new_name='languages',
        ),
        migrations.RenameField(
            model_name='entretiendev',
            old_name='technical_skills_selected_language_level',
            new_name='selectedLanguageLevel',
        ),
    ]
