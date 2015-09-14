# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('monospace_editor', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='salt',
        ),
        migrations.AddField(
            model_name='user',
            name='last_login',
            field=models.DateTimeField(null=True, blank=True, verbose_name='last login'),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=128, verbose_name='password'),
        ),
    ]
