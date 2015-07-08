# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('email', models.TextField()),
                ('password', models.TextField()),
                ('salt', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='UserScripts',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('script_text', models.TextField()),
                ('user', models.ForeignKey(to='monospace_editor.User')),
            ],
        ),
    ]
