# Generated by Django 2.2.4 on 2019-08-30 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bowl', '0003_auto_20190825_1847'),
    ]

    operations = [
        migrations.AddField(
            model_name='bowl',
            name='username',
            field=models.CharField(default='', max_length=50),
        ),
    ]