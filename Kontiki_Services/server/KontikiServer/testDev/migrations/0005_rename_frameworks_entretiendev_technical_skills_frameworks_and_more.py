# Generated by Django 5.1.4 on 2025-01-06 07:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testDev', '0004_alter_entretiendev_frameworks_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entretiendev',
            old_name='frameworks',
            new_name='technical_skills_frameworks',
        ),
        migrations.RenameField(
            model_name='entretiendev',
            old_name='languages',
            new_name='technical_skills_languages',
        ),
        migrations.RenameField(
            model_name='entretiendev',
            old_name='selectedLanguageLevel',
            new_name='technical_skills_selected_language_level',
        ),
    ]
